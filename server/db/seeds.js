use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name:'Lewis Halstead',
    email: 'lew@gmail.com',
    checkedIn: false
  },
  {
    name: 'Steve Randolph',
    email: 'steverandolph@gmail.com',
    checkedIn: true
  }
]);
