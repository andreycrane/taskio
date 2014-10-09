package Taskio::Controller::Tasks;
use Mojo::Base 'Mojolicious::Controller';

sub all {
    my $self = shift;
    my ($row, $tasks) = (undef, []);

    my $sth = $self->app->dbh->prepare('
                select 
                    id,
                    project_id,
                    name,
                    description,
                    UNIX_TIMESTAMP(created),
                    UNIX_TIMESTAMP(start_datetime),
                    UNIX_TIMESTAMP(end_datetime),
                    done,
                    UNIX_TIMESTAMP(done_at)
                from tasks');
    $sth->execute;
    push(@$tasks, $row) while($row = $sth->fetchrow_hashref());
    $tasks = [map { $_->{done} = undef if($_->{done} eq "0"); $_; } @$tasks];

    $self->render(json => $tasks);
}

sub create {
    my $self = shift;
    my $task = $self->req->json;
   
    $self->app->dbh->do('
        insert into tasks (
                    project_id,
                    done,
                    name,
                    start_datetime,
                    end_datetime,
                    created,
                    done_at
                ) VALUES( 
                    ?,                  -- project_id
                    ?,                  -- done
                    ?,                  -- name
                    FROM_UNIXTIME(?),   -- start_datetime
                    FROM_UNIXTIME(?),   -- end_datetime 
                    FROM_UNIXTIME(?),   -- created 
                    FROM_UNIXTIME(?)    -- done_at
                )', 
                    undef,
                    $task->{project_id}, 
                    $task->{done},
                    $task->{name},
                    $task->{start_datetime},
                    $task->{end_datetime},
                    $task->{created},
                    $task->{done_at});
    
    $task->{id} = $self->app->dbh->{mysql_insertid};
    $self->render(json => $task);
}

1;
