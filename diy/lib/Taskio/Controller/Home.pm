package Taskio::Controller::Home;
use Mojo::Base 'Mojolicious::Controller';

# This action will render a template
sub index {
  my $self = shift;

  $self->redirect_to("/index_build.html");
}

1;
