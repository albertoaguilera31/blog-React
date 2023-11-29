import React from 'react'

export const Sidebar = () => {
  return (
<aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text"/>
                    <button>Buscar</button>
                </form>
            </div>

            {/*<div className="add">
                <h3 className="title">Añadir Pelicula</h3>
                <form>
                    <input type="text" placeholder="titulo"/>
                    <textarea placeholder="descripcion"></textarea>
                    <input type="submit" value="guardar"/>
                </form>
            </div>*/}
  </aside    >

  )
}
