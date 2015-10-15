var edit = levenshteinEditFunctions;

QUnit.test( "Insertion Tests", function( assert ) {
	assert.expect( 5 );

	assert.equal( edit.insertion( "Spiderman", "Batman", 0 ), "SBatman", "Insert as first character" );
	assert.equal( edit.insertion( "Spiderman", "Batman", 1 ), "Bpatman", "Insert as second character" );
	assert.equal( edit.insertion( "Spiderman", "Batman", 3 ), "Batdman", "Insert as middle character" );
	assert.equal( edit.insertion( "Spiderman", "Batman", 5 ), "Batmarn", "Insert as second to last character" );
	assert.equal( edit.insertion( "Spiderman", "Batman", 6 ), "Batmanm", "Insert as last character" );
});

QUnit.test( "Substitution Tests", function( assert ) {
	assert.expect( 5 );

	assert.equal( edit.substitution( "Spiderman", "Batman", 0 ), "Satman", "Substitute first character" );
	assert.equal( edit.substitution( "Spiderman", "Batman", 1 ), "Bptman", "Substitute second character" );
	assert.equal( edit.substitution( "Spiderman", "Batman", 3 ), "Batdan", "Substitute middle character" );
	assert.equal( edit.substitution( "Spiderman", "Batman", 5 ), "Batmar", "Substitute last character" );
	assert.equal( edit.substitution( "Spiderman", "Batman", 6 ), "Batmanm", "Substitute above original length" );
});

QUnit.test( "Deletion Tests", function( assert ) {
	assert.expect( 5 );

	assert.equal( edit.deletion( "Spiderman", "Batman", 0 ), "atman", "Delete first character" );
	assert.equal( edit.deletion( "Spiderman", "Batman", 1 ), "Btman", "Delete second character" );
	assert.equal( edit.deletion( "Spiderman", "Batman", 3 ), "Batan", "Delete middle character" );
	assert.equal( edit.deletion( "Spiderman", "Batman", 5 ), "Batma", "Delete last character" );
	assert.equal( edit.deletion( "Spiderman", "Batman", 6 ), "Batman", "Delete above original length" );
});