import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsFetch } from '../../redux/productSlice';


function useShopLogic() {
    const [filterName, setFilterName] = useState(null);
    const [request, setRequest] = useState([]);
    const [loading, setLoading] = useState(true);


    const products = useSelector(state => state.products.data);

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData  = async()=>{
            dispatch(productsFetch());
            setLoading(false);
        }
        fetchData();
    },[]);
    useEffect(() => {
        if (products && Array.isArray(products)) {
            setRequest(products);
        } else {
            console.log(products);
            setRequest([]);
        }
    }, [products]);

    const groupedData = useMemo(() => {
        if (Array.isArray(request)) {
            return request.reduce((acc, item) => {
                acc[item.type] = (acc[item.type] || 0) + 1;
                return acc;
        }, {});
        } else {
            return {};
        }
    }, [request]);


    const handleFilter = (name) => {
        setFilterName(name);
    };

    
    const filteredData = useMemo(() => {
        if (Array.isArray(request)) {
            return filterName
                ? request.filter((item) => item.type === filterName)
                : request;
        } else {
            return [];
        }    
    }, [request, filterName]);

    const filterOptions = [
        { id: 'all', value: null, label: 'All in one' },
        { id: 'woman', value: 'woman', label: 'Women Perfumes' },
        { id: 'man', value: 'man', label: 'Men Colognes' },
        { id: 'kids', value: 'kids', label: 'Kids Perfume' },
        { id: 'new', value: 'new', label: 'New Fragrance' },
    ];

    
    const filterOptionsUi = filterOptions.map(option => (
        <span key={option.id} className='d-flex justify-content-between align-items-center pt-3 pb-3 type-product' onClick={() => handleFilter(option.value)}>
            <label htmlFor={option.id}>
                <input
                    type="checkbox"
                    id={option.id}
                    className='mx-1'
                    checked={filterName === option.value}
                    onChange={() => handleFilter(option.value)}
                />
                {option.label}
            </label>
            <span className='lenght'>({groupedData[option.value] || (option.value === null ? request.length : 0)})</span>
        </span>
    ));
    
    
    const getBreadcrumbText = () => {
        const selectedOption = filterOptions.find(option => option.value === filterName);
        return selectedOption ? selectedOption.label : 'Collection';
    };


   
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
   
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const renderPageNumbers = () => {
        const pageNumbers = []; 
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button onClick={() => paginate(i)} className="page-link">
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredData]); 
    
    return {
        filterName,
        loading,
        filteredData,
        getBreadcrumbText,
        setFilterName,
        filterOptionsUi,
        renderPageNumbers,
        goToPrevPage,
        goToNextPage,
        currentItems,
        currentPage,
        totalPages,
    };
}

export default useShopLogic
