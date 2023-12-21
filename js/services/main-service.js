
import view from '../views/main-view.js'

const internals = {}
const externals = {}

/*internals.spies = [
    {id:1, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:2, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:3, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:4, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:5, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:6, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:7, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:8, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:9, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:10, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:12, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {id:13, name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},

]*/

internals.getIDS = 
internals.spies = fetch('http://127.0.0.1:8080/vimPossibles/api/spy/').then( (result) => result.json());

externals.getSpies = function() {
  //  view.prependFilterBar();
    try {
       internals.spies.then((response => response.forEach(spy => view.render(spy))));
    } catch(e) {
        console.log(e.stack);
    }
}

export default externals;