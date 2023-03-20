import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { VISIBILITY_FILTERS } from '../constants'
import { setFilter } from '../redux/action'
import { TodoItem, Store } from '../interface/TodoInterface'

interface PropsType {
    activeFilter: string
    setFilter: (filter: string) => void
}


const VisibilityFilters = ({ activeFilter, setFilter }: PropsType) => {
    debugger
    return (
       <div className="visibility-filters">
           {
               Object.keys(VISIBILITY_FILTERS).map((item, index) => {
                //    debugger
                   return <span key={index} className={cx('filter-item', { 'active': activeFilter === VISIBILITY_FILTERS[item]})} onClick={() => setFilter(VISIBILITY_FILTERS[item])}>{VISIBILITY_FILTERS[item]}</span>
               })
           }
       </div>
    )
}

const mapStateToProps = (state: Store) => {
    const { visibilityFilter } = state;
    return { activeFilter: visibilityFilter };
  };

export default connect(mapStateToProps, {
    setFilter
})(VisibilityFilters as any)