import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="footer__wrapper">
					<div className="footer__text">
					 	© 2017 Emile Choghi
					</div>
					<div className="social-links">
						<li>
							<a href="https://github.com/echoghi">
								<i className="icon icon-github" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/emile-choghi-a6b60ba1/">
								<i className="icon icon-linkedin" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/emile.choghi">
								<i className="icon icon-facebook" />
							</a>
						</li>
					</div>
				</div>
			</div>
		);
	}

};

export default Footer;