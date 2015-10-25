const stats = {
  totalUsers: 1000,
  averageCorrect: 1,
  // number of questions correct, number of users
  // (10 users got 0 question correct, etc)
  correctAmountsBreakdown: new Map([
    [ 0, 10 ],
    [ 1, 100 ],
    [ 2, 500 ],
    [ 3, 200 ],
    [ 4, 180 ],
    [ 5, 10 ]
  ])
}

export default stats;