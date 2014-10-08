package Taskio;
use Mojo::Base 'Mojolicious';
use DBI();
use utf8;

has dbh => sub {
    my $db      = "taskio";     

    if (%ENV{OPENSHIFT_APP_NAME} eq 'taskio') {
    
        my $host    = %ENV{OPENSHIFT_MYSQL_DB_HOST};
        my $user    = %ENV{OPENSHIFT_MYSQL_DB_USERNAME};
        my $pass    = %ENV{OPENSHIFT_MYSQL_DB_PASSWORD};

    } else {
   
        my $host    = "localhost:3306";
        my $user    = "root";
        my $pass    = "coffee";
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
  $r->get('/tasks')->to('Tasks#all');
  $r->get('/projects')->to('Projects#all');
}

1;
