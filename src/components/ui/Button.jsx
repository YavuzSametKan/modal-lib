import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
                    type = 'button',
                    className,
                    children,
                    color = 'blue',
                    size = 'medium',
                    ...props
                }) => {

    const baseStyles = 'rounded-md text-white focus:outline-none';

    const colorClasses = {
        blue: 'bg-blue-500 hover:bg-blue-600 text-white',
        red: 'bg-red-500 hover:bg-red-600 text-white',
        green: 'bg-green-500 hover:bg-green-600 text-white',
        yellow: 'bg-yellow-400 hover:bg-yellow-500 text-black',
        orange: 'bg-orange-500 hover:bg-orange-600 text-white',
        purple: 'bg-indigo-500 hover:bg-indigo-600 text-white'
    };

    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-3 py-2',
        large: 'px-4 py-3 text-lg'
    };

    return (
        <button
            type={type}
            className={classNames(baseStyles, colorClasses[color], sizeClasses[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['blue', 'red', 'green', 'yellow', 'orange', 'purple']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;