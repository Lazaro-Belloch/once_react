import React from 'react'
import { Link } from 'react-router-dom'
import db from '../config/firebase'

const ProjectsTable = (props) => {

    const onBorrarClicked = id => {
        console.log("elemento a borrar", id)
        db.collection("projects").doc(id).delete().then (
            res => {
                console.log(res);
                props.deleteElement(id);
            }
        ).catch(console.log)
    }

    return (
        <div>
            <div>
                <table className="ui striped table unstackable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Código de proyecto</th>
                            <th>Descripción</th>
                            <th>Cliente</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.items.map(
                                e => <tr key={`project${e.id}`}>
                                    <td>{e.id}</td>
                                    <td>{e.code}</td>
                                    <td>{e.description}</td>
                                    <td>{e.client}</td>
                                    <td>
                                        <Link to={`/projects/${e.id}/view`}>
                                            Ver
                                            </Link> &nbsp;
                                            <Link to={`/projects/${e.id}/edit`}>
                                            Editar
                                            </Link> &nbsp;
                                            <a href="/#" onClick={() => onBorrarClicked(e.id)} >Borrar</a>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsTable

