import React from 'react'
import Board from "../../containers/Board";
import { IReview } from '../Firebase/interface';

const Search = (props: any) => {
  let { query } = props.match.params;
  console.log(query);
  query = query.split('&');
  console.log(query);
  const prefix = "# ";
  const suffix = ' ';
  const predicate = (query: string[]) => (review: IReview) => {
    for (let key in review.tags) {
      const tagName = review.tags[key].name;
      if(query.includes(tagName)) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="papper-board">
      <h1>{query && query.map((val:string) => prefix + val + suffix)}</h1>
      <Board boardType="Search" boardPredicate={predicate(query)} search={true}/>
    </div>
  )
};

export default Search;
