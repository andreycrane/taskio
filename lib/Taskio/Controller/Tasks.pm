package Taskio::Controller::Tasks;
use Mojo::Base 'Mojolicious::Controller';

sub all {
    my $self = shift;
    my $tasks = $self->app->dbh->selectall_arrayref('select * from tasks');

    $self->render(json => $tasks);
}

1;
