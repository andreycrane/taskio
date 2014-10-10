package Taskio;
use Mojo::Base 'Mojolicious';
use Mojolicious::Plugin::Authentication;
use DBI();
use utf8;

has dbh => sub {
    my ($db, $host, $user, $pass) = ("taskio", undef, undef, undef); 

    if (defined($ENV{'OPENSHIFT_APP_NAME'})) {
        $host    = $ENV{'OPENSHIFT_MYSQL_DB_HOST'};
        $user    = $ENV{'OPENSHIFT_MYSQL_DB_USERNAME'};
        $pass    = $ENV{'OPENSHIFT_MYSQL_DB_PASSWORD'};

    } else {
        $host    = "localhost:3306";
        $user    = "root";
        $pass    = "coffee";
    }

    $::dbh ||= DBI->connect("DBI:mysql:database=$db;host=$host", 
                $user, $pass, { RaiseError => 1, mysql_enable_utf8 => 1 });
};


# This method will run once at server start
sub startup {
    my $self = shift;
    
    # Documentation browser under "/perldoc"
    $self->plugin('PODRenderer');
    
    # Helpers 
    $self->helper(db => sub { shift->app->dbh });
    $self->helper(js_to_unix => sub { return (defined($_[1])) ? ($_[1] / 1000) : 0 });
    $self->helper(unix_to_js => sub { return (defined($_[1])) ? ($_[1] * 1000) : 0 });

    # Authenication
    $self->plugin('authentication' => {
        autoload_user => 1,
        sessions_key => 'taskio',
        load_user => sub {
            my ($self, $uid) = @_;

            my $user = $self->db->selectrow_hashref(
                'select id, username from users where id = ?',
                    undef, $uid);

            unless ($user) { return undef; }
            return $user;
        },

        validate_user => sub {
            my ($self, $username, $password, $extradata) = @_;
            
            my $user = $self->db->selectrow_hashref(
                'select id from users where username=? and password=PASSWORD(?)',
                    undef, $username, $password);
            
            unless ($user) { return undef; }
            return $user->{'id'};
        },
        
        current_ser_fn => 'user' 
    });

    # Router
    my $r = $self->routes;

    # Home controller render interface 
    $r->get('/')->to(cb => sub {
        my $self = shift;
        
        $self->app->log->debug('Hello from callback');

        $self->redirect_to('login_page') and return 0 unless($self->is_user_authenticated);
        return 1; 
    })->to('Home#index')->name('index');
    
    # Login controller for authentication
    $r->get('/login')->to('Login#login_page')->name('login_page');
    $r->post('/login')->to('Login#login');
    $r->get('/logout')->over(signed => 1)->to('Login#user_logout');
    
    # Tasks controller
    my $tasks = $r->route('/tasks')->over(authenticated => 1)->bridge;
    $tasks->get->to('Tasks#all');
    $tasks->post->to('Tasks#create');
    $tasks->put("/:id")->to('Tasks#update');
    $tasks->delete('/:id')->to('Tasks#delete');
    
    # Projects controller
    my $projects = $r->route('/projects')->over(authenticated => 1)->bridge;
    $projects->get->to('Projects#all');
    $projects->post->to('Projects#create');
    $projects->put('/:id')->to('Projects#update');
    $projects->delete('/:id')->to('Projects#delete');
}

1;
