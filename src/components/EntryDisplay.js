import styled from 'styled-components';

const StyledEntryDisplay = styled.table`
    border: 1px solid #333;
    border-collapse: collapse;
    flex: 1;
    padding: 12px;

    th,td {
        border: 1px solid #333;
        padding: 5px;
    }
`;

const EntryDisplay = ({...props}) => {
    const { data } = props;

    return (
        <StyledEntryDisplay>
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{entry.firstName}</td>
                            <td>{entry.lastName}</td>
                            <td>{entry.phoneNumber}</td>
                        </tr>
                    );
                })}
            </tbody>
        </StyledEntryDisplay>
    );;
}

export default EntryDisplay;