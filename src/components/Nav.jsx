import React from 'react';

const Nav = ({ setCategory }) => {
    const categories = [
        { name: 'Technology', value: 'technology' },
        { name: 'Business', value: 'business' },
        { name: 'Health', value: 'health' },
        { name: 'Science', value: 'science' },
        { name: 'Sports', value: 'sports' },
        { name: 'Entertainment', value: 'entertainment' },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <span className="badge bg-light text-dark fs-4 px-3 py-2">📰 News API App</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-2">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        {categories.map((cat, index) => (
                            <li className="nav-item" key={index}>
                                <button
                                    className="btn btn-outline-light btn-sm nav-link btn-hover-black"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setCategory(cat.value)}
                                >
                                    {cat.name}
                                </button>

                            </li>
                        ))}
                        <li className="nav-item">
                            <span className="nav-link disabled" aria-disabled="true">Test Disabled</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
