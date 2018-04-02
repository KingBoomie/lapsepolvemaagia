/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const { languages, defaultLanguage } = require('./src/i18n-config')

 console.log(languages, defaultLanguage)
 
 exports.onCreatePage = async ({ page, boundActionCreators }) => {
   const { createPage, deletePage } = boundActionCreators
 
   return new Promise((resolve, reject) => {
     deletePage(page)
     languages.map((language) => {
       let newPage = Object.assign({}, page, {
         originalPath: page.path,
         path: language === defaultLanguage ? page.path : '/' + language + page.path,
         context: {
           lang: language
         }
       })
 
       // console.log('creating', newPage)
       createPage(newPage)
     })
 
     resolve()
   })
 }