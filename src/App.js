import { BrowserRouter, Switch, Route} from "react-router-dom"

import FormServico from "./components/FormServico";
import ListaServico from "./components/ListaServico";

const App = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListaServico}/>
                <Route path="/incluir" component={FormServico}/>
                <Route path="/editar/:id" component={FormServico}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App;