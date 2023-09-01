import styled from 'styled-components';

export const TableLine = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

export const Name = styled.div`
    color: #989797;
    font-size: 18px;
    font-weight: 700;
    width: 100px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
`;

export const Map = styled.div``;
export const MapContainer = styled.div``;
export const AddressInput = styled.input`
    display: none;
`;

export const SaveBtn = styled.button`
    margin: 10px auto;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    border: none;
    color: white;
    background-color: var(--color-accent);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 50px;

    &:hover {
        opacity: 0.8;
    }
`;
