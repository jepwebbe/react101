import { Routes, Route } from 'react-router-dom'
import { About } from '../../Pages/About'
import { Contact } from '../../Pages/Contact'
import { GoalDetails } from '../../Pages/Goals/GoalDetails'
import { GoalList } from '../../Pages/Goals/GoalList'
import { Home } from "../../Pages/Home"
import { Notfound } from "../../Pages/Notfound"

export const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="goals" element={<GoalList />} >
                <Route path=":id" element={<GoalDetails />} />
            </Route>
            <Route path="*" element={<Notfound />} />
        </Routes>
    )
}
