describe('date parsing', function() {
	describe('month-day-year formats', function() {
		var dateFormat;
		describe('with no leading zeroes', function() {
			beforeEach(function() {
				dateFormat = '%n/%j/%Y';
			});
			it('should parse correct date when neither day nor month has a leading zero', function() {
				var dateRecord = datePickerController.parseDateString('6/9/2012',dateFormat);
				expect(dateRecord.d).toEqual(9);
				expect(dateRecord.m).toEqual(6);
				expect(dateRecord.y).toEqual(2012);
			});
			it('should parse correct date when leading zeroes are supplied', function() {
				var dateRecord = datePickerController.parseDateString('05/03/2011',dateFormat);
				expect(dateRecord.d).toEqual(3);
				expect(dateRecord.m).toEqual(5);
				expect(dateRecord.y).toEqual(2011);
			});
			it('should parse correct date when day has no leading zero', function() {
				var dateRecord = datePickerController.parseDateString('02/9/2013',dateFormat);
				expect(dateRecord.d).toEqual(9);
				expect(dateRecord.m).toEqual(2);
				expect(dateRecord.y).toEqual(2013);
			});
			it('should parse correct date when month has no leading zero', function() {
				var dateRecord = datePickerController.parseDateString('3/07/2013',dateFormat);
				expect(dateRecord.d).toEqual(7);
				expect(dateRecord.m).toEqual(3);
				expect(dateRecord.y).toEqual(2013);
			});
		});
		describe('with leading zeroes', function() {
			beforeEach(function() {
				dateFormat = '%m/%d/%Y';
			});
			it('should parse correct date when leading zeroes are supplied', function() {
				var dateRecord = datePickerController.parseDateString('05/03/2011',dateFormat);
				expect(dateRecord.d).toEqual(3);
				expect(dateRecord.m).toEqual(5);
				expect(dateRecord.y).toEqual(2011);
			});
			it('should parse correct date when day has no leading zero', function() {
				var dateRecord = datePickerController.parseDateString('02/9/2013',dateFormat);
				expect(dateRecord.d).toEqual(9);
				expect(dateRecord.m).toEqual(2);
				expect(dateRecord.y).toEqual(2013);
			});
			it('should parse correct date when month has no leading zero', function() {
				var dateRecord = datePickerController.parseDateString('3/07/2013',dateFormat);
				expect(dateRecord.d).toEqual(7);
				expect(dateRecord.m).toEqual(3);
				expect(dateRecord.y).toEqual(2013);
			});
			it('should parse correct date when neither day nor month has a leading zero', function() {
				var dateRecord = datePickerController.parseDateString('4/8/2009',dateFormat);
				expect(dateRecord.d).toEqual(8);
				expect(dateRecord.m).toEqual(4);
				expect(dateRecord.y).toEqual(2009);
			});
		});
	});
});