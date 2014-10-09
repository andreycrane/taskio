package Taskio;
use Mojo::Base 'Mojolicious';
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

    $::dbh ||= DBI->connect("DBI:mysql:database=$db;host=$host", $user, $pass, { RaiseError => 1 });
};


# This method will run once at server start
sub startup {
    my $self = shift;
    
    # Documentation browser under "/perldoc"
    $self->plugin('PODRenderer');

    # Router
    my $r = $self->routes;

    # Normal route to controller
    $r->get('/')->to('Home#index');

    my $tasks = $r->bridge('/tasks');
    $tasks->get->to('Tasks#all');
    $tasks->post->to('Tasks#create');
    

    my $projects = $r->bridge('/projects');
    $projects->get->to('Projects#all');
    $projects->post->to('Projects#create');
    $projects->put('/:id')->to('Projects#update');
    $projects->delete('/:id')->to('Projects#delete');
}

1;
