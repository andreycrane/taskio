package Taskio;
use Mojo::Base 'Mojolicious';
use DBI();
use utf8;

has dbh => sub {
    my $db      = "taskio";
    my $host    = "localhost:3306";
    my $user    = "root";
    my $pass    = "coffee";

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
