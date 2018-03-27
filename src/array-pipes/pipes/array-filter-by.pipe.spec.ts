import { testData } from './../test';
import { ArrayFilterPipe } from './array-filter-by.pipe';

const result = [
  {
    _id: '5ab9c81febf774900a0ff849',
    index: 0,
    guid: '3ed3d5d4-7b27-4091-a207-427c196a76fc',
    balance: '$1,367.97',
    age: 28,
    eyeColor: 'brown',
    firstName: 'Bertie',
    lastName: 'Marks',
    company: 'ISOTRONIC',
    email: 'bertie.marks@isotronic.info',
    phone: '+1 (817) 557-2705',
    address: '853 Cook Street, Deercroft, Northern Mariana Islands, 1714',
    about: 'Quis aliqua et mollit mollit ad velit ut deserunt tempor sint sunt. Enim occaecat consectetur cillum ipsum cupidatat. Labore occaecat qui tempor veniam laborum deserunt. Elit magna commodo laborum voluptate incididunt ad. Sit elit enim culpa pariatur proident fugiat quis eu magna.'
  },
  {
    _id: '5ab9c820c181d1a8468a64ae',
    index: 5,
    guid: 'be7b9b92-d3c8-4175-a57d-d918304e410f',
    balance: '$1,601.57',
    age: 26,
    eyeColor: 'brown',
    firstName: 'Megan',
    lastName: 'Barr',
    company: 'GRAINSPOT',
    email: 'megan.barr@grainspot.tv',
    phone: '+1 (831) 576-3439',
    address: '707 Dewey Place, Gerber, West Virginia, 794',
    about: 'Officia mollit dolore occaecat occaecat. Voluptate adipisicing ad sit aliquip laborum proident aliquip nulla incididunt. Aute laboris elit nisi aute exercitation esse sit velit enim duis. Sunt fugiat ad non qui dolor Lorem.'
  }
];
describe('ArrayFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the value when not array', () => {
    const pipe = new ArrayFilterPipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });

  it('should return the filtered array of objects', () => {
    const pipe = new ArrayFilterPipe();
    expect(pipe.transform(testData, 'B')).toEqual(result);
  });

  it('should return the filtered array of objects', () => {
    const pipe = new ArrayFilterPipe();
    expect(pipe.transform(testData, 'B', 'firstName')).toEqual([result[0]]);
  });

  it('should return the filtered array of objects', () => {
    const pipe = new ArrayFilterPipe();
    const arr = ['star', 'galaxy', 'sun', 'moon', 'earth'];
    expect(pipe.transform(arr, 'ar')).toEqual(['star', 'earth']);
  });
});
