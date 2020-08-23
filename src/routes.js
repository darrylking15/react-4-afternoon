import React from 'react'
import {Switch, Route} from 'react-router-dom'; 
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Contact from './components/Contact/Contact'
import History from './components/History/History'
import Home from './components/Home/Home'
import Student from './components/Student/Student'



export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/classlist/:class' component={ClassList}/>
        <Route path='/history' component={History}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/student' component={Student}/>

    </Switch>
)