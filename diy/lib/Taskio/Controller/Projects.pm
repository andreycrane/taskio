package Taskio::Controller::Projects;
use Mojo::Base 'Mojolicious::Controller';
use Data::Dumper;
use utf8;

sub all {
    my $self = shift;
    my $projects = $self->app->dbh->selectall_arrayref('select * from projects');

    $projects = [map { id => $_->[0], name => $_->[1], color => $_->[2] }, @$projects];
    $self->render(json => $projects);
};

sub create {
    my $self = shift;
    my $project = $self->req->json;
    
    $self->app->dbh->do('insert into projects (name, color) values(?, ?)', 
                                    undef, $project->{name}, $project->{color});
    
    $project->{id} = $self->app->dbh->{mysql_insertid};
    $self->render(json => $project);
}

sub update {
    my $self = shift;
    my $id = $self->param('id');
    my $project = $self->req->json;

    $self->app->dbh->do('update projects set name = ?, color = ? where id = ?',
            undef, $project->{name}, $project->{color}, $project->{id});
    $self->render(json => $project);
}

sub delete {
    my $self = shift;
    my $id = $self->param('id');
    
    $self->app->dbh->do('delete from projects where id = ?', undef, $id);
    $self->rendered(200);
}

1;
