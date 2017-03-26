/**
 * Created by nmw on 2017/3/24.
 */
import React from 'react'
const Footer = ({filter, onClick}) => {
    const renderFilter =(filterName, name) => {
        if(filterName === filter){
            return name
        }
        return (
            <a
                href="#"
                onClick={e=>{
                    e.preventDefault();
                    onClick(filterName);
                }}
            >
                {name}
            </a>
        )
    }

    return (
        <p>
            SHOW:
            {" "}
            {renderFilter('SHOW_ALL', 'All')}
            {', '}
            {renderFilter('SHOW_COMPLETED', 'Completed')}
            {', '}
            {renderFilter('SHOW_ACTIVE', 'Active')}
        </p>
    )
}
export default Footer;
