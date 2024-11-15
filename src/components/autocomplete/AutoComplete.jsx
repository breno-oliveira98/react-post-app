import React, { useState } from 'react';
import { Form, ListGroup, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AutoCompleteInput = ({ options }) => {
    // Estado para armazenar o valor do input
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isFocused, setIsFocused] = useState(false); // Estado para verificar se o input está focado


    // Função para lidar com a digitação
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchTerm(query);

        // Filtrando as opções conforme o texto digitado
        if (query) {
            const filtered = options.filter(route =>
                route.path.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions([]);
        }
    };

    // Funções para controlar o foco no input
    const handleFocus = () => {
        setFilteredOptions(options); // Quando o input receber foco, exibe todas as opções
    };

    const handleBlur = () => {
        setIsFocused(false); // Remove a lista quando o input perde o foco (se não houver texto)
    };

    return (
        <div className="autocomplete-container" style={{ position: 'relative' }}>
            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Digite para buscar..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onFocus={handleFocus} // Adiciona a lógica para mostrar todas as opções ao focar
                    onBlur={handleBlur} // Remove a lista ao perder o foco
                />
            </InputGroup>

            {filteredOptions.length > 0 && (
                <ListGroup
                    //className="autocomplete-list"
                    style={{
                        position: 'absolute',
                        top: '100%', // Posiciona abaixo do campo de input
                        left: 0,
                        right: 0,
                        zIndex: 10, // Garante que a lista fique acima de outros conteúdos
                        maxHeight: '200px', // Limita a altura da lista
                        overflowY: 'auto', // Permite rolar caso tenha muitas opções
                    }}
                >
                    {filteredOptions.map((option, index) => (
                        <ListGroup.Item action key={index} href={option.path}>
                            {option.path.replace('/', '')}
                        </ListGroup.Item >
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default AutoCompleteInput;
