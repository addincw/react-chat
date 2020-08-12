import React from 'react';
import queryString from 'query-string';

import './Chat.css';

const Chat = ({ location }) => {
    const { username, group } = queryString.parse(location.search)

    return (
        <section className="section">
            <div className="container">
                <div className="box box-danger" style={{ marginTop: "-8px", marginBottom: "-8px", padding: "0px" }}>
                    <div className="box-body">
                        <div className="messaging">
                            <div className="inbox_msg">
                                <div className="inbox_people">
                                    <div className="headind_srch">
                                        <div className="recent_heading">
                                            <h4>Users <span></span></h4>
                                        </div>
                                    </div>

                                    <div className="srch_bar">
                                        <div className="stylish-input-group">
                                            <input type="text" className="search-bar" placeholder="Search" />
                                            <span className="input-group-addon">
                                                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                                            </span> </div>
                                    </div>

                                    <div className="inbox_chat">
                                        <div className="self"></div>
                                        <div className="others"></div>
                                    </div>
                                </div>
                                <div className="mesgs">
                                    <div className="headind_srch">
                                        <div className="msg_heading">
                                            <div className="chat_people">
                                                <div className="chat_ib">
                                                    <h5>
                                                        <label className="label label-default">You're in</label>
                                                        {group} Group
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="msg_history" style={{ paddingTop: "40px" }}> </div>

                                    <div className="type_msg">
                                        <div className="input_msg_write">
                                            <input type="text" className="write_msg" placeholder="Type a message" />
                                            <button className="msg_send_btn">
                                                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat
