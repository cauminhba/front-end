import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import '../../App.css';

const MemberTable = (props) => {
    let { listMember } = props;


    return (
        <div>
            <Table celled >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Email Opt-in</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {listMember.map(m =>
                        <Table.Row>
                            <Table.Cell> {m.firstName} </Table.Cell>
                            <Table.Cell> {m.surname} </Table.Cell>
                            <Table.Cell> {m.email} </Table.Cell>
                            <Table.Cell>
                                <Button>Edit</Button>
                                <Button onClick={() => props.deleteEmployee(m.employeeId)}>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>

    )
}

export default MemberTable;