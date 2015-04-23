package Serie;

sub new 
{
	my $class = shift;
	my ($winner, $games, $points) = @_;
	my $self = bless {
		winner => $winner,
		games => $games,
		points => $points
	}, $class;
	
	return $self;
}