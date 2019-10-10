import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default class Paginations extends React.Component {
    static defaultProps = {
        label: 'defaultPagination',
        last_page: 1,
        callback: (e) => alert(`pagination click handler [${e}] not set !!`)
    }

    state = {
        currentPage: 1
    }

    pageClick = (val) => {
        this.setState({currentPage: val}, ()=> this.props.callback(val))
    }

    render() {
        const {last_page} = this.props;
        const hasPrevious = this.state.currentPage <= 1 ? true : false;
        const hasNext = this.state.currentPage < last_page;

        return (
            <div className={this.props.className}>
                <Pagination aria-label="default-pagination">
                    <PaginationItem disabled={hasPrevious}>
                        <PaginationLink previous onClick={() => this.pageClick(1)}/>
                    </PaginationItem>

                    <PaginationItem disabled={hasPrevious}>
                        <PaginationLink onClick={()=>this.pageClick(this.state.currentPage - 1)}>‹</PaginationLink>
                    </PaginationItem>

                    {Array.apply(null, {length: last_page}).map((e, index)=>{
                        return(
                            <React.Fragment key={'pagination-' + index}>
                                <PaginationItem>
                                    <PaginationLink onClick={()=>this.pageClick(index + 1)}>
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            </React.Fragment>
                        )
                    })}

                    <PaginationItem disabled={!hasNext}>
                        <PaginationLink onClick={()=>this.pageClick(this.state.currentPage + 1)}>›</PaginationLink>
                    </PaginationItem>

                    <PaginationItem disabled={!hasNext}>
                        <PaginationLink next onClick={()=>this.pageClick(last_page)}/>
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}
