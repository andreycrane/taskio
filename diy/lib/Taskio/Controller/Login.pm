package Taskio::Controller::Login;
use Mojo::Base 'Mojolicious::Controller';

sub login_page { }

sub login {
    my $self = shift;
    
    my $username = $self->param('username');
    my $password = $self->param('password');
    
    $self->redirect_to('index') and return 1 if($self->authenticate($username, $password));
    $self->render(template => 'login/login_page');
}

sub user_logout {
    my $self =shift;    

    $self->logout();
    $self->redirect_to('login_page');
}

1;
