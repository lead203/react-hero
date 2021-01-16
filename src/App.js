import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {MoreDetails} from './components/MoreDetails'
import {DateState} from './context/date/DateState'
import {FirebaseState} from './context/firebase/FirebaseState'

function App() {

  return (
    <FirebaseState>
      <DateState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Switch>
              <Route path={'/'} exact component={Home} />

              <Route path='/details/:id' render={(matchProps) =>
                <MoreDetails
                  {...matchProps}
                />
              }/>
            </Switch>
          </div>
        </BrowserRouter>
      </DateState>
    </FirebaseState>
  );
}

export default App;