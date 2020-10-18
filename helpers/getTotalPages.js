import { DEFAULT_POSTS_PER_PAGE } from '../constants';

const getTotalPages = (files = []) => Math.ceil(files.length / DEFAULT_POSTS_PER_PAGE);

export default getTotalPages;