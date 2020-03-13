// [] vs {} ACCESSING PROPERTIES


var car = {
    make : 'Honda',
    color: 'Red',
    mpg: 34,
    gallons: 12,
    engine: 1,
}

car.color = 'green';

car['origin year'] = 1984;
car['function'] = 'drive';

console.log(car.color, car.make, car.engine, car['origin year'], car['mpg'])


