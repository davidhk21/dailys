const minMeetingRooms = require('../Interval/MeetingRooms2.js');

describe('minMeetingRooms', () => {
  test('should count the right number of needed meeting rooms', () => {
    expect(minMeetingRooms([[0,30],[5,10],[15,20]])).toEqual(2);
  })

  test('should work with unsorted intervals', () => {
    expect(minMeetingRooms([[7,10],[2,4]])).toEqual(1);
  })

  test('should work with intervals that end and start at same times', () => {
    expect(minMeetingRooms([[9,10],[4,9],[4,17]])).toEqual(2);
  })
})