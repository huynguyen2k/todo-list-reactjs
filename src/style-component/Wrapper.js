import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
    background-color: ${props => props.theme.wrapColor};
    background-image: linear-gradient(to right, ${props => props.theme.fromLinear}, ${props => props.theme.toLinear});
    
    .todo-list {
        position: relative;
        width: 700px;
        height: 80vh;
        padding: 32px;
        border-radius: 8px;
        
        color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.primaryBackground};

        overflow-y: scroll;

        /* width */
        ::-webkit-scrollbar {
            width: 8px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 8px;
            background: ${props => props.theme.primaryBackground}; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background: ${props => props.theme.scrollColor}; 
        }
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: ${props => props.theme.scrollHoverColor}; 
        }
        &__theme {
            position: absolute;
            top: 8px;
            right: 8px;
            width: 50px;
            height: 50px;
            padding: 8px;
            color: ${props => props.theme.colorThemeIcon};
            transition: transform 0.25s ease;
            cursor: pointer;
            &:hover {
                transform: scale(1.15);
            }
        }
        &__header {
            margin-bottom: 32px;
            padding: 16px;
            color: ${props => props.theme.headerColor};
            
            text-align: center;
            font-size: 2rem;
            font-weight: 600;
        }
        &__add-task {
            display: flex;
            margin-bottom: 32px;
            input {
                flex: 1 0 0;
                border: none;
                border-radius: 3px;
                padding: 0 8px;
                
                border: 1px solid ${props => props.theme.borderInputColor};
            }
            
            button {
                width: 80px;
                margin-left: 4px;
                border: none;
                border-radius: 3px;
                padding: 10px;
                color: white;
                &:disabled {
                    opacity: 0.5;
                    cursor: no-drop;
                }
            }
            .add-task-btn {
                background-color: ${props => props.theme.successColor};
            }
            .update-task-btn {
                background-color: ${props => props.theme.dangerColor};
            }
        }
        &__task-list {
            
            .task-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 12px;
                border-top: 1px solid ${props => props.theme.listBorderColor};
                
                &:last-child {
                    border-bottom: 1px solid ${props => props.theme.listBorderColor};
                }
                .title {
                    font-size: 1.2rem;
                }
                .icons {
                    display: flex;
                    .icon {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 30px;
                        height: 30px;
                        margin-left: 8px;
                        border-radius: 2px;
                        padding: 8px;
                        color: ${props => props.theme.colorIcon};
                        cursor: pointer;
                        transition: transform 0.25s ease;
                        &:hover {
                            transform: scale(1.15);
                        }
                    }
                    .check-icon {
                        background-color: ${props => props.theme.successColor};
                        &.active {
                            color: ${props => props.theme.successColor};
                            background-color: transparent;
                        }
                    }
                    .edit-icon {
                        background-color: ${props => props.theme.warningColor};
                    }
                    .trash-icon {
                        background-color: ${props => props.theme.dangerColor};
                    }
                }
            }
        }
    }
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            content: '';
            animation: showModal 0.3s ease both;
        }
        &__content {
            position: relative;
            z-index: 10;
            width: 500px;
            border-radius: 4px;
            background-color: white;
            overflow: hidden;
            animation: popup 0.3s 0.15s ease both;
        }
        &__header {
            padding: 16px;
            color: white;
            background: ${props => props.theme.successColor};
            font-size: 1.5rem;
            text-align: center;
        }
        &__body {
            padding: 20px;
            .icon {
                margin: 0 auto 20px;
                width: 100px;
                color: ${props => props.theme.successColor};
            }
            .title {
                font-size: 1.5rem;
                text-align: center;
            }
        }
        &__footer {
            border-top: 1px solid #ddd;
            padding: 16px;
            .btn {
                width: 100px;
                border: none;
                border-radius: 3px;
                padding: 10px;
                color: white;
                &:disabled {
                    opacity: 0.5;
                    cursor: no-drop;
                }
                &.success-btn {
                    background-color: ${props => props.theme.successColor};
                }
            }
        }
        .text-right {
            text-align: right;
        }
    }
    @keyframes popup {
        from {
            opacity: 0;
            transform: scale(0.75)
        }
        to {
            opacity: 1;
            transform: scale(1)
        }
    }
    @keyframes showModal {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.8;
        }
    }
`