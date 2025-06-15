import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productsFetch } from "../../redux/productSlice";
import { Form } from "./navbar_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function AutoSuggust() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: allProducts, status: productsStatus } = useSelector((state) => state.products); 

    useEffect(() => {
        if (productsStatus === 'idle' || productsStatus === 'rejected') { 
            dispatch(productsFetch());
        }
    }, [dispatch, productsStatus]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            const filteredSuggestions = allProducts.filter(product =>
                product.title.toLowerCase().includes(value.toLowerCase()) 
            );
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (product) => {
        setSearchTerm(product.title); 
        setSuggestions([]);
        setShowSuggestions(false);
        navigate(`/one-product/${product._id}`);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Actual search for:", searchTerm);
        setSuggestions([]);
        setShowSuggestions(false);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowSuggestions(false);
        }, 100);
    };

    const handleFocus = () => {
        if (searchTerm.length > 0 && suggestions.length > 0) {
            setShowSuggestions(true);
        }
    };

    return (
        <Form onSubmit={handleFormSubmit}> 
            <div style={{ position: 'relative', width: '100%' }}>
                <input
                    type='text'
                    placeholder='Search our store'
                    required
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
                {showSuggestions && suggestions.length > 0 && (
                    <ul style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        listStyle: 'none',
                        padding: 0,
                        margin: '5px 0 0 0',
                        zIndex: 100,
                        maxHeight: '200px',
                        overflowY: 'auto',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}>
                        {suggestions.map((product) => (
                            <li
                                key={product._id} 
                                onClick={() => handleSuggestionClick(product)}
                                style={{
                                    padding: '10px 15px',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid #eee',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                {product.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </Form>
    );
}

export default AutoSuggust;