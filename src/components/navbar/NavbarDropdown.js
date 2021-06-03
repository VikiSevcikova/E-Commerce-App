import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Navbar.scss';

const NavbarDropdown = ({category}) => {
    const {subcategories} = category;
    const numberOfColumns = 3;
    const numberOfRows = Math.ceil(subcategories.length/3);
    return(
        <>
            <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="women" role="button" data-bs-toggle="dropdown" aria-expanded="false">{category.name}</a>
                <ul className={`dropdown-menu multi-column columns-${numberOfColumns} border-0`} aria-labelledby="women">
                    <div className="row gx-0 justify-content-center">
                        {subcategories && [...Array(numberOfColumns)].map((x,i) => (
                            <div key={category.id+i} className="col-sm-2">
                                <ul className="multi-column-dropdown">
                                    {subcategories.slice(i*numberOfRows,i*numberOfRows+numberOfRows).map((subcategory, i)=>(
                                            <li key={i}><Link to={`${category.name}/${subcategory.name.toLowerCase().replace(" ", "-")}`}>{subcategory.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ul>
            </li>
        </>
    );
}

export default NavbarDropdown;