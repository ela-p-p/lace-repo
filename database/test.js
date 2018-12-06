// eslint - disable;
// /////populate eachMPP with MPPconstituency (address/email) reference
// function populateDB(nameArray) {
//   mppconstituencies
//     .find({ $text: { $search: nameArray } })
//     .then(dbmodel =>
//       eachMPP.findOneAndUpdate({ $text: { $search: nameArray } }, { addressEmailId: dbmodel[0]._id }, { new: true })
//     )
//     .then(dbconst => {
//       console.log(dbconst);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }
// const result = arrayNames.map(a => a.name);
// for (let m = 0; m < result.length; m += 1) {
//   const last = result[m].substring(result[m].lastIndexOf(' ') + 1);
//   populateDB(last);
// }

// // //populate voting stats with billVotes refererence
// function populateDB(nameArray) {
//   votingStats
//     .find({})
//     .then(dbmodel => billVotes.findOneAndUpdate({ $text: { $search: nameArray } }, { votingStatsId: dbmodel[0]._id }))
//     .then(dbconst => {
//       console.log(dbconst);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }
// const result = arrayNames.map(a => a.name);
// for (let m = 0; m < result.length; m += 1) {
//   const last = result[m].substring(result[m].lastIndexOf(' ') + 1);
//   populateDB(last);
// }

// //seed DB
// votingStats
//   .create(votingStatsSeed)
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });
// const array =
//     [
//         {
//             _id: '5bbd6023d955d7122cc5156',
//             'data': 'Date,October 4, 2018,October 4, 2018,October 4, 2018,October 4, 2018,October 3, 2018,October 2, 2018,October 1, 2018,September 27, 2018,Bill stage,-,Second Reading,Second Reading,Second Reading,-,Second Reading,Second Reading,First Reading,Activity,Ordered referred to Standing Committee pursuant to the Order of the',
//             'title': 'Bill 36, Cannabis Statute Law Amendment Act, 2018',
//             'URL': 'https://www.ola.org/en/legislative-business/bills/parliament-42/session-1/bill-36',
//             'MPP': 'Mulroney, Hon. Caroline Attorney General',
//         },
//         {
//             _id: '5bbd6023d955d7122cc5158d',
//             'data': 'Date,October 3, 2018,October 3, 2018,October 3, 2018,October 3, 2018,September 13, 2018,September 12, 2018,August 8, 2018,August 7, 2018,Augu',
//             'title': 'Bill 4, Cap and Trade Cancellation Act, 2018',
//             'URL': 'https://www.ola.org/en/legislative-business/bills/parliament-42/session-1/bill-4',
//             'MPP': 'Phillips, Hon. Rod Minister of the Environment, Conservation and Parks',
//         },
//         {
//             _id: '5bbd6023d955d7122cc51570',
//             'data': 'Date,October 4, 2018,October 4, 2018,October 4, 2018,September 19, 2018,Bill stage,-,Second Reading,Second Reading,First Reading,Activity,Ordered referred to Standing Committee,Carried,Debate,Carried,Committee,Standing Committee on Regulations and Private Bills,',
//             'title': 'Bill 33, Rea and Walter Act (Truss and Lightweight Construction Identification), 2018',
//             'URL': 'https://www.ola.org/en/legislative-business/bills/parliament-42/session-1/bill-33',
//             'MPP': 'Pettapiece, Randy ',
//         },
//         {
//             _id: '5bbd6023d955d7122cc51573',
//             'data': 'Date,October 4, 2018,October 4, 2018,August 14, 2018,Bill stage,Second Reading,Second Reading,First Reading,Activity,Lost,Debate,Carried,Committee,-,-,-',
//             'title': 'Bill 30, Fighting Back Against Handguns Act (Handgun Ammunition Sales), 2018',
//             'URL': 'https://www.ola.org/en/legislative-business/bills/parliament-42/session-1/bill-30',
//             'MPP': 'Hunter, Mitzie ',
//         },
//     ]

//     const names = array.map((post) => {
//     const {title, URL, data} = post
//     let findComma = post.data.indexOf(',')
//     let findYear = post.data.indexOf('2018');
//  let date = post.data.substring(findComma +1, findYear+4)
//     console.log(date)
//     })
