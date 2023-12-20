
import view from '../views/main-view.js'

const internals = {}
const externals = {}

internals.spies = [
    {name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
    {name: 'Kim Possible', specialty: 'Baddassery', img: 'https://m.media-amazon.com/images/M/MV5BNjVmZDY3ODItOTZiOC00NjAwLTkxMjEtMDQxMzMwMDMzNDJkXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg', description: 'test'},
]

externals.getSpies = function() {
    internals.spies.forEach(spy => view.render(spy));
}

export default externals;