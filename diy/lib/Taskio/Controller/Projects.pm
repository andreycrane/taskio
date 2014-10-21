package Taskio::Controller::Projects;
use Mojo::Base 'Mojolicious::Controller';

sub all {
    my $self = shift;
    my $projects = $self->db->selectall_arrayref('select * from projects where id != 1');

    $projects = [map { id => $_->[0], name => $_->[1], color => $_->[2] }, @$projects];
    $self->render(json => $projects);
};

sub create {
    my $self = shift;
    my $project = $self->req->json;
    
    $self->db->do('insert into projects (name, color) values(?, ?)', 
                                    undef, $project->{name}, $project->{color});
    
    $project->{id} = $self->app->dbh->{mysql_insertid};
    $self->render(json => $project);
}

sub update {
    my $self = shift;
    my $id = $self->param('id');
    my $project = $self->req->json;

    $self->db->do('update projects set name = ?, color = ? where id = ?',
            undef, $project->{name}, $project->{color}, $project->{id});
    $self->render(json => $project);
}

sub delete {
    my $self = shift;
    my $id = $self->param('id');
    
    $self->db->do('delete from projects where id = ?', undef, $id);
    $self->rendered(200);
}

1;
