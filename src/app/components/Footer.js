import React from 'react';

class Footer extends React.Component {
	renderFooterClass() {
		if(this.props.fixed) {
			if(this.props.type === 'portfolio') {
				return 'footer footer__portfolio fixed';
			} else {
				return 'footer fixed';
			}
		} else {
			return 'footer';
		}
	}

	render() {
		return (
			<div className={this.renderFooterClass()}>
				<div className="footer__wrapper">
					<div className="footer__text">
					 	© 2017 Emile Choghi
					</div>
					<div className="social-links">
						<li>
							<a href="https://github.com/echoghi">
								<i className="icon-github" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/emile-choghi-a6b60ba1/">
								<i className="icon-linkedin" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/emile.choghi">
								<i className="icon-facebook2" />
							</a>
						</li>
					</div>
				</div>
			</div>
		);
	}

};

export default Footer;