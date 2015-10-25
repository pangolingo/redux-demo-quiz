const stats = {
  totalUsers: 1000,
  averageCorrect: 1,
  // 900 users got 1 question correct
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