use strict;

my %players;

open my $inputFile, "<Round1InputCie.csv" or die "Cannot open input file";
open my $outputFile, ">inputGen.js" or die "Cannot create output file";

round1();
sub round1
{
	print $outputFile "var tmp;\n";
	while(<$inputFile>)
	{
		chomp (my $currentLine = $_);

		if ($currentLine =~ /(\d+\/\d+\/\d+ \d+\:\d+\:\d+),([^,]+),([^,]+),(.+)/)
		{
			$players{$2} = {};
			my $currentPlayer = $2;
			

			
			$currentLine = $4;
			
			for(my $i=0 ; $i < 8; $i++)
			{
				$players{$currentPlayer}{'s'.$i} = {};
				if ($currentLine=~ /([^,]+),([^,]+),(.+)/)
				{
					$players{$currentPlayer}{'s'.$i}{'winner'} = $1;
					$players{$currentPlayer}{'s'.$i}{'games'} = $2;
					$currentLine = $3;
				}
			}
			for(my $i=0 ; $i < 8; $i++)
			{
				if ($currentLine=~ /(\d),(.+)/)
				{
					$players{$currentPlayer}{'s'.$i}{'points'} = $1;
					$currentLine = $2;
				}
			}
			
			if ($currentLine=~ /([^,]+),([^,]+),([^,]+)/)
			{
				$players{$currentPlayer}{'finalistEast'} = $1;
				$players{$currentPlayer}{'finalistWest'} = $2;
				$players{$currentPlayer}{'cupWinner'} = $3;
			}
		}
	} # End of Parsing

			
	print "Printing results\n";
	
	for my $pk (keys %players)
	{
		print $outputFile "\n\n\ntmp = pool.addPlayer('$pk');\n";	
		for (my $i=0 ; $i < 8 ;$i++)
		{
			print $outputFile "tmp.rounds[0].series.push(new Series('" . $players{$pk}{'s'.$i}{'winner'} . "', '". $players{$pk}{'s'.$i}{'games'}. "', '" . $players{$pk}{'s'.$i}{'points'} . "'));\n";
		}
		print $outputFile "tmp.finalistEast = '" . $players{$pk}{'finalistEast'} . "';\n";
		print $outputFile "tmp.finalistWest = '" . $players{$pk}{'finalistWest'} . "';\n";
		print $outputFile "tmp.cupWinner = '" . $players{$pk}{'cupWinner'} . "';\n";
		print $outputFile "tmp.calculatePoints(results);\n";
	}
			
		
}

