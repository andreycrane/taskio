package Taskio::Controller::Projects;
use Mojo::Base 'Mojolicious::Controller';

sub all {
    my $self = shift;
    my $projects = $self->app->dbh->selectall_arrayref('select * from projects');

    $self->render(json => $projects);
};
