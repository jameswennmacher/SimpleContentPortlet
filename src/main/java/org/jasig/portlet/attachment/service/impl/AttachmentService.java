/**
 * Licensed to Apereo under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Apereo licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License.  You may obtain a
 * copy of the License at the following location:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.jasig.portlet.attachment.service.impl;

import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.jasig.portlet.attachment.dao.IAttachmentDao;
import org.jasig.portlet.attachment.model.Attachment;
import org.jasig.portlet.attachment.service.IAttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author Chris Waymire (chris@waymire.net)
 */
@Component
public class AttachmentService implements IAttachmentService {
    @Autowired
    private IAttachmentDao attachmentDao;

    public Attachment get(final long attachmentId) {
        return attachmentDao.get(attachmentId);
    }

    public Attachment get(final String guid) {
        return attachmentDao.get(guid);
    }

    public List<Attachment> find(final String creator) {
        return attachmentDao.find(creator);
    }

    public List<Attachment> find(final String creator,final String filename) {
        return attachmentDao.find(creator,filename);
    }

    public List<Attachment> findAll(int offset, int maxresults) {
        return attachmentDao.findAll(offset, maxresults);
    }

    public Attachment save(Attachment attachment, String username) {
        // The username must be present
        if (StringUtils.isBlank(username)) {
            throw new IllegalArgumentException("Value for username cannot be blank;  " +
                    "is Tomcat's session path configured for shared sessions?");
        }

        Attachment existing = attachmentDao.get(attachment.getGuid());
        if(existing != null)
        {
            existing.setFilename(attachment.getFilename());
            existing.setPath(attachment.getPath());
            existing.setData(attachment.getData());
            existing.setSource(attachment.getSource());
            attachment = existing;
        }

        updateTimestamps(attachment, username);
        Attachment saved = attachmentDao.save(attachment);
        return saved;
    }

    public void delete(Attachment attachment) {
        attachmentDao.delete(attachment);
    }

    public void delete(long attachmentId) {
        attachmentDao.delete(attachmentId);
    }

    protected void updateTimestamps(final Attachment attachment,final String user)
    {
        Date now = new Date();
        if(attachment.getCreatedAt() == null)
        {
            attachment.setCreatedBy(user);
            attachment.setCreatedAt(now);
        }
        attachment.setModifiedBy(user);
        attachment.setModifiedAt(now);
    }

}
