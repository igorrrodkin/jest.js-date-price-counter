const worktime = require('./script');

test('Function returns price and date',()=>{
    expect(worktime(900,'eng','dbuhbnuh',2021,4,15,18)).toBe('The price is 129.6 hrn , Mon May 17 2021 13:50:00 GMT+0300 (Восточная Европа, летнее время)')
})

test('Function returns price and date2',()=>{
    expect(worktime(20000,'rus','rtf',2021,4,15,7)).toBe('The price is 1000 hrn , Tue May 18 2021 16:30:00 GMT+0300 (Восточная Европа, летнее время)')
})

test('Function returns price and date3',()=>{
    expect(worktime(100000,'rus','doc',2021,4,21,18)).toBe('The price is 5000 hrn , Thu Jun 03 2021 12:31:00 GMT+0300 (Восточная Европа, летнее время)')
})



