import React, { Component } from 'react';

export class Contacts extends Component {

    render() {
        return (
            <div className="row justify-content-center">
                <header className="col-11 my-4">
                    <div className="row">
                        <div className="col-8">
                            <h3>All Contacts <i className="fa fa-caret-down" aria-hidden="true"></i></h3>
                        </div>
                        <div className="col">
                            <button className="btn btn-sm bg-danger ml-1"><i class="fas fa-plus ml-1"></i> New</button>
                            <button className="btn btn-sm bg-default ml-1"><i class="fa fa-cog"></i></button>
                            <button className="btn btn-sm bg-default ml-1"><i class="fa fa-bars ml-1"></i></button>
                            <button className="btn btn-sm bg-light ml-1 text-primary"><i class="fa fa-lightbulb ml-1"></i>Page Tips</button>
                        </div>
                    </div>
                </header>
                <div class="w-100"></div>
                <div className="col-11" id="table">
                    <table className="table table-bordered">
                        <thead className="table-default">
                            <tr>
                                <th>NAME</th>
                                <th>COMPANY NAME</th>
                                <th>EMAIL</th>
                                <th>WORK PHONE</th>
                                <th>GST TREATMENT</th>
                                <th>RECEVABLES</th>
                                <th>PAYABLED</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map(element => this.row(element))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    row(data) {
        return (
            <tr key={data.contact_id}>
                <td className="text-capitalize"><a href="#">{data.contact_name}</a></td>
                <td>{data.company_name}</td>
                <td className="text-lowercase">{data.email}</td>
                <td>{data.phone}</td>
                <td className="text-capitalize">{data.gst_treatment.replace('_', ' ')}</td>
                <td>{data.outstanding_receivable_amount}</td>
                <td>{data.outstanding_payable_amount}</td>
            </tr>
        );
    }

}

export default Contacts;
