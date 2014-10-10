package Taskio::Controller::Tasks;
use Mojo::Base 'Mojolicious::Controller';

sub all {
    my $self = shift;
    my ($row, $tasks) = (undef, []);

    my $sth = $self->db->prepare('
                select 
                    id,
                    project_id,
                    name,
                    description,
                    UNIX_TIMESTAMP(created) AS created,
                    UNIX_TIMESTAMP(start_datetime) AS start_datetime,
                    UNIX_TIMESTAMP(end_datetime) AS end_datetime,
                    done,
                    UNIX_TIMESTAMP(done_at) AS done_at
                from tasks');
    $sth->execute;
    push(@$tasks, $row) while($row = $sth->fetchrow_hashref());
    $tasks = [map { 
                    $_->{done} = undef if($_->{done} eq "0");
                    $_->{start_datetime} = $self->unix_to_js($_->{start_datetime});
                    $_->{end_datetime} = $self->unix_to_js($_->{end_datetime});
                    $_->{done_at} = $self->unix_to_js($_->{done_at});
                    $_->{created} = $self->unix_to_js($_->{created});
                    $_; 
                } @$tasks];

    $self->render(json => $tasks);
}

sub create {
    my $self = shift;
    my $task = $self->req->json;

    $self->app->log->debug($task->{start_datetime}, $self->js_to_unix($task->{start_datetime}));

    $self->db->do('
        insert into tasks (
                    project_id,
                    done,
                    name,
                    description,
                    start_datetime,
                    end_datetime,
                    created,
                    done_at
                ) VALUES( 
                    ?,                  -- project_id
                    ?,                  -- done
                    ?,                  -- name
                    ?,                  -- description
                    FROM_UNIXTIME(?),   -- start_datetime
                    FROM_UNIXTIME(?),   -- end_datetime 
                    FROM_UNIXTIME(?),   -- created 
                    FROM_UNIXTIME(?)    -- done_at
                )', 
                    undef,
                    $task->{project_id}, 
                    $task->{done},
                    $task->{name},
                    $task->{description},
                    $self->js_to_unix($task->{start_datetime}), 
                    $self->js_to_unix($task->{end_datetime}),
                    $self->js_to_unix($task->{created}),
                    $self->js_to_unix($task->{done_at}));
    
    $task->{id} = $self->app->dbh->{mysql_insertid};
    $self->render(json => $task);
}

sub update {
    my $self = shift;
    my $id = $self->param('id');
    my $task = $self->req->json;
 
    my $rows = $self->db->do('
        UPDATE tasks SET
                project_id = ?,
                done = ?,
                name = ?,
                description = ?,
                start_datetime = FROM_UNIXTIME(?),
                end_datetime = FROM_UNIXTIME(?),
                done_at = FROM_UNIXTIME(?)
            WHERE id = ?
    ',  undef, 
        $task->{project_id},
        $task->{done},
        $task->{name},
        $task->{description},
        $self->js_to_unix($task->{start_datetime}),
        $self->js_to_unix($task->{end_datetime}),
        $self->js_to_unix($task->{done_at}),
        $id);
    
    $self->render(json => $task);
}

sub delete {
    my $self = shift;
    my $id = $self->param('id');
     
    $self->db->do('delete from tasks where id = ?', undef, $id);
    $self->rendered(200);
}

1;
