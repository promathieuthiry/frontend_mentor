import React, { useState, useEffect } from 'react';
import Source from './data/data.json';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import { Header, Wrapper } from './styles/StyledApp';
import Cards from './components/Cards';
import Query from './components/Query';

export function App() {
  const [jobs, setJobs] = useState(Source);
  const [filterQuery, setFilterQuery] = useState([]);

  const addElement = (element) => {
    if (filterQuery.indexOf(element) === -1) {
      setFilterQuery([...filterQuery, element]);
    }
  };

  const removeElement = (element) => {
    const rawData = filterQuery.slice();
    rawData.splice(rawData.indexOf(element), 1);
    setFilterQuery(rawData);
  };

  const filterEl = (arr) => {
    if (filterQuery.length > 0) {
      let res = [];
      for (let job of arr) {
        let jobTags = [job.role, job.level, ...job.languages];
        if (filterQuery.every((value) => jobTags.includes(value))) {
          res.push(job);
        }
      }
      return res;
    } else {
      return arr;
    }
  };

  console.log(jobs, 'jobs');
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Query
          removeElement={removeElement}
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
        />
        {filterEl(jobs).map((job, index) => (
          <Cards key={job.id} job={job} addElement={addElement} />
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}
