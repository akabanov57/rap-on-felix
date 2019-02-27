/*******************************************************************************
 * Copyright (c) 2008, 2015 Matthew Hall and others.
 *
 * This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License 2.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *     Matthew Hall - initial API and implementation (bug 247997)
 *     Matthew Hall - bug 264307
 ******************************************************************************/

package org.eclipse.core.internal.databinding.beans;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.databinding.beans.BeanProperties;
import org.eclipse.core.databinding.property.set.DelegatingSetProperty;
import org.eclipse.core.databinding.property.set.ISetProperty;

/**
 * @since 3.3
 *
 */
public class AnonymousBeanSetProperty extends DelegatingSetProperty {
	private final String propertyName;

	private Map delegates;

	/**
	 * @param propertyName
	 * @param elementType
	 */
	public AnonymousBeanSetProperty(String propertyName, Class elementType) {
		super(elementType);
		this.propertyName = propertyName;
		this.delegates = new HashMap();
	}

	@Override
	protected ISetProperty doGetDelegate(Object source) {
		Class beanClass = source.getClass();
		if (delegates.containsKey(beanClass))
			return (ISetProperty) delegates.get(beanClass);

		ISetProperty delegate;
		try {
			delegate = BeanProperties.set(beanClass, propertyName,
					(Class) getElementType());
		} catch (IllegalArgumentException noSuchProperty) {
			delegate = null;
		}
		delegates.put(beanClass, delegate);
		return delegate;
	}

	@Override
	public String toString() {
		String s = "?." + propertyName + "{}"; //$NON-NLS-1$ //$NON-NLS-2$
		Class elementType = (Class) getElementType();
		if (elementType != null)
			s += "<" + BeanPropertyHelper.shortClassName(elementType) + ">"; //$NON-NLS-1$//$NON-NLS-2$
		return s;
	}
}
